import * as vscode from 'vscode';

//activate webview config
export function activate(context: vscode.ExtensionContext) {
	const provider = new DDBViewProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(DDBViewProvider.viewId, provider));
}

//webview config
class DDBViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewId = 'vscode-pets.debugView';

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) {}

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		_context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {
		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [this._extensionUri]
		};
		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
	}

	//webview HTML
	private _getHtmlForWebview(webview: vscode.Webview) {
		//variables for script scource and link ref
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'static', 'ddb.js'));
		const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'static', 'style.css'));
		return `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="initial-scale=1.0, width=device-width">
					<link href="${styleUri}" rel="stylesheet">
					<script src="${scriptUri}"></script>
					<title>Brian Stuart Pet</title>
				</head>
				<body>
					<div id="ddbChatContainer">
						<div id="ddbChatText"></div>
<<<<<<< HEAD
						<div id="ddbInput"><textarea placeholder="Message Daddy"></textarea></div>
=======
						<div id="ddbInput"><textarea placeholder="Message Brian Daddy"></textarea></div>
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
					</div>
				</body>
			</html>
		`;
	}
}

//decativate when extension is disbaled
//function type "export" (TS typeset rule)
export function deactivate() {}
