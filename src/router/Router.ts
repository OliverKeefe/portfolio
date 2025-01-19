export class Router {
    private routes: Map<string, () => void> = new Map();
    private defaultRoute: (() => void) | null = null;

    constructor() {
        this.initialize();
    }

    private initialize(): void {
        window.addEventListener("hashchange", () => this.handleRoute());
        this.handleRoute();
    }

    public addRoute(path: string, handler: () => void): void {
        this.routes.set(path, handler);
    }

    public navigate(path: string): void {
        window.location.hash = `#${path}`;
    }

    private handleRoute(): void {
        const currentPath: string = this.getCurrentPath();
        const handler = this.routes.get(currentPath);

        if (handler) {
            handler();
        } else if (this.defaultRoute) {
            this.defaultRoute();
        } else {
            this.renderNotFound();
            console.error(`No handler function found for: ${currentPath}`);
        }
    }

    private renderNotFound(): void {
        const app = document.getElementById("app");

        if (app) {
            app.innerHTML = "<h1>404 - Page Not Found</h1>";
        } else {
            console.error("404 - Page Not Found");
        }
    }

    private getCurrentPath(): string {
        return window.location.hash.slice(1) || "/"
    }
}