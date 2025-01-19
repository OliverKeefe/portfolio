import {Router} from "./Router.ts";

class HistoryRouter extends Router {
    private historyStack: string[] = [];

    public constructor() {
        super();
    }

    public initialize(): void {
        super.initialize();

        window.addEventListener("popstate", () => {
            const currentPath = this.historyStack.pop();
            if (currentPath) {
                this.navigate(currentPath);
            } else {
                this.handleRoute();
            }
        });
    }
}
