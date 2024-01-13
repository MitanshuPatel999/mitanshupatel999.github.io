import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
 @Input() project = {} as Project;

 bsModalRef?: NgbModalRef;

 constructor(private modalService: NgbModal){

 }

OpenProjectModal(){
  const modalOptions: NgbModalOptions={
    size:"modal-lg"
  }
  this.bsModalRef=this.modalService.open(ProjectModalComponent, modalOptions);
  this.bsModalRef.componentInstance.project=this.project;
}

}
