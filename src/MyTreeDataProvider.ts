import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { randomInt } from 'crypto';

export class MyTreeDataProvider implements vscode.TreeDataProvider<Entry>
{
    deps;

    constructor(private workspaceRoot: string) {
        
        let a = randomInt(100);
        let b = randomInt(100);
        let c = randomInt(100);

        let entry1 = new Entry("Rumba", "Rumba Dance" + a, vscode.TreeItemCollapsibleState.None);
        let entry2 = new Entry("Tango", "Tango Dance" + b, vscode.TreeItemCollapsibleState.None);
        let entry3 = new Entry("Foxtrot", "Foxtrot Dance" + c, vscode.TreeItemCollapsibleState.Collapsed);

        this.deps = new Array(entry1, entry2, entry3);

    }

    getTreeItem(element: Entry): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Entry | undefined): vscode.ProviderResult<Entry[]> {
        return this.deps;

    }


}


class Entry extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        private something: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState
    ) {
        super(label, collapsibleState);
        this.tooltip = `${this.label}-${this.something}`;
        this.description = this.something;
    }
}
