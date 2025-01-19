import './style.css'
import { Router } from './router/Router.ts'

const router = new Router();

router.addRoute("/home", () => {
    console.log("Home Page");
    const app = document.getElementById('app');

    if (app) {
        app.innerHTML = "<h1>Home Page</h1>";
    }
});

document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLDivElement;

    if (target.tagName === "A" && target.hasAttribute("data-link")) {
        e.preventDefault();
        const href = target.getAttribute("href")!;
        router.navigate(href);
    }
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <nav>
            <a href="/home" data-link>Home</a>
        </nav>    
    </div>
`;