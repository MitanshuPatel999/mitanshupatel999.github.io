import { Component, inject } from '@angular/core';
import { Project } from '../_models/Project';
import { NgbActiveModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, NgIf],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  project={} as Project;
  modal = inject(NgbActiveModal)

}
