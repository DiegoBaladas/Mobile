import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { SearchFormComponent } from "./search-form.component"
import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule, NativeScriptFormsModule],
  declarations: [SearchComponent, SearchFormComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
