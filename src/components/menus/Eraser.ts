import {AbstractMenuButton} from "../AbstractMenuButton.ts";

export class Eraser extends AbstractMenuButton {
    constructor() {
        super();
        this.template = `
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.9999 18.9967H20.9999V20.9967H11.9999L8.00229 20.9992L1.51457 14.5115C1.12405 14.1209 1.12405 13.4878 1.51457 13.0972L12.1212 2.49065C12.5117 2.10012 13.1449 2.10012 13.5354 2.49065L21.3136 10.2688C21.7041 10.6593 21.7041 11.2925 21.3136 11.683L13.9999 18.9967ZM15.6567 14.5115L19.1922 10.9759L12.8283 4.61197L9.29275 8.1475L15.6567 14.5115Z"></path></svg>
        </div>
        `;
        this.registerClickListener();
    }

    // @ts-ignore
    onClick(commands) {
        commands.unsetAllMarks();
    }

}


