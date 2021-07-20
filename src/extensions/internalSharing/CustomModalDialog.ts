import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import styles from '../../styles/CustomModalDialog.module.scss' 
 
export default class CustomDialog extends BaseDialog {  
    
    public itemUrlFromExtension: string;  
    public otherParam: string;  
    public paramFromDailog:string;  
       
    public render(): void {  
        var html:string = "";  
        html+=  `<div  class="${ styles["main-dialog"] }">`; 
        html += `<div id="overlay" class="${ styles.overlay }"></div>`;
        html += `<img style="margin-left:40%;" src="/_layouts/15/images/progress.gif">`
        html+=  `<h1 class="${ styles.text }">!!Please wait!!</h1>`;
        html+=  `<h1 class="${ styles.text }">!!We are Converting your File to PDF!!</h1>`;
        html+=  `</div>`
        this.domElement.innerHTML += html;    
         
    }  
   public  getConfig(): IDialogConfiguration {
    return {
    isBlocking: false
    };
}
    protected onAfterClose(): void {  
      super.onAfterClose();       
    }     
  } 