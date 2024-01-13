import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle("Mitanshu Patel - Home")
  }
  ngOnInit(): void {
    this.featuredProject=this.projectService.GetProjecById(3);
  }
}
