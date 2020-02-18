import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
const MaterialComponents = [
  MatFormFieldModule,
  FlexLayoutModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ],
})
export class MaterialModule { }
