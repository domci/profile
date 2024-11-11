import { execSync } from "node:child_process";
import path from "node:path";
import { intro, outro, text } from "@clack/prompts";

// Function to execute shell commands
function executeCommand(command: string) {
    console.log(`\x1b[33m${command}\x1b[0m`);
    try {
        return execSync(command, { encoding: "utf-8" });
    } catch (error: any) {
        return { error: true, message: error.stdout || error.stderr };
    }
}

// Function to prompt user for input
async function prompt(message: string, defaultValue: string): Promise<string> {
    return (await text({
        message: `${message} (${defaultValue}):`,
        placeholder: defaultValue,
        defaultValue,
    })) as string;
}

async function createPagesProject() {
    intro("Setting up Cloudflare Pages...");
    const defaultPagesName = path.basename(process.cwd());
    const pagesName = await prompt(
        "Enter the name of your cloudflare pages",
        defaultPagesName,
    );
    
    const branch = executeCommand("git branch --show-current");
    executeCommand(
        `wrangler pages project create ${pagesName} --production-branch ${branch}`,
    );
    
    outro("Pages project created successfully!");
}

async function main() {
    try {
        const whoamiOutput = executeCommand("wrangler whoami");
        if (whoamiOutput === undefined || typeof whoamiOutput !== "string") {
            console.error(
                "\x1b[31mError running wrangler whoami. Please run `wrangler login`.\x1b[0m",
            );
            process.exit(1);
        }

        await createPagesProject();
        
        console.log("\x1b[33mRunning bun run dev command...\x1b[0m");
        execSync("bun run dev", { stdio: "inherit" });
    } catch (error) {
        console.error("\x1b[31mError:", error, "\x1b[0m");
        process.exit(1);
    }
}

main();
