import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfViewerComponent } from './pdf-viewer.component';

@NgModule({
    imports: [CommonModule],
    exports: [PdfViewerComponent],
    declarations: [PdfViewerComponent]
})
export class PdfViewerModule { 
    static forRoot() {
        return {
            ngModule: PdfViewerModule,
            providers: []
        };
    }
}