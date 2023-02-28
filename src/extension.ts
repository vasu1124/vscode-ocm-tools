import * as shell from 'shelljs';
import { ExtensionContext, window } from 'vscode';
import { registerCommands } from './commands';
import { createDocumentProvider } from './documents/dataProvider';
import { succeeded } from './errorable';
import { setExtensionContext } from './extensionContext';
import { promptToInstallOCM } from './install';
import { createTreeViews, refreshAllTreeViews } from './views/treeViews';
import { GlobalState } from './globalState';

export let globalState: GlobalState;

export async function activate(context: ExtensionContext) {
	//@ts-ignore
	shell.config.execPath = shell.which('node').toString();

	setExtensionContext(context);

	globalState = new GlobalState(context);

	createTreeViews(context);
	createDocumentProvider(context);
	registerCommands();

	await promptToInstallOCM();
}

export function deactivate(): void { }


