import { project } from './../models/project.model';
import{injectable} from '@angular/core';
import{httpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@injectable({
    provideIn:'root'
})
