import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [{
    "id": 0,
    "name": "Visual Captioning System",
    "summary": "Generative AI technology for automatic image captioning",
    "description": "The Visual Captioning System is an Generative AI technology using Python programming language that can automatically generate descriptive captions for the images. It utilizes the concepts of CNN and LSTM. The model has been deployed as a web application using Flask framework.",
    "projectLink": "https://github.com/MitanshuPatel999/VisualCaptioningSystem.git",
    "tags": [Tag.PYTHON, Tag.AIML],
    "pictures": ["../../assets/project_imgs/VCS_Picture1.png","../../assets/project_imgs/VCS_Picture2.png"]
  },
  {
    "id": 1,
    "name": "BIRBAL - An AI based Voice Assistant",
    "summary": "AI-based voice-enabled desktop assistant with automation features",
    "description": "BIRBAL is an AI-based voice-enabled desktop assistant which provides us some sort of automation in our day-to-day tasks. This is a web app which uses HTML, CSS and JS. BIRBAL can deploy ML & CV models such as FaceAPI.js (built on top of TensorFlow core) for face recognition. It is also configured with different Firebase services.",
    "projectLink": "https://github.com/MitanshuPatel999/BIRBAL-DesktopVoiceAssistant_2.0.git",
    "tags": [Tag.HTML, Tag.JAVASCRIPT, Tag.FIREBASE],
    "pictures": ["../../assets/project_imgs/Birbal_Picture1.jpg","../../assets/project_imgs/Birbal_Picture2.jpg",
    "../../assets/project_imgs/Birbal_Picture3.jpg","../../assets/project_imgs/Birbal_Picture4.jpg",
    "../../assets/project_imgs/Birbal_Picture5.jpg"]
  },
  {
    "id": 2,
    "name": "SeeSort - Visualize The Sorting Algorithms",
    "summary": "Visualization tool for understanding sorting algorithms",
    "description": "The purpose of SeeSort is to help users understand how sorting algorithms work by displaying a step-by-step process of sorting a list of numbers.",
    "projectLink": "https://github.com/MitanshuPatel999/SeeSort.git",
    "tags": [Tag.HTML, Tag.JAVASCRIPT],
    "pictures": ["../../assets/project_imgs/SeeSort_Picture1.png"]
  },
  {
    "id": 3,
    "name": "Rule Expert ChatBot System",
    "summary": "Robust rule-based chatbot for legal document comprehension",
    "description": "Architected and implemented a robust rule-based chatbot leveraging .NET technologies to assist users in comprehending legal documents. The chatbot seamlessly integrates with APIs, fetching and interpreting legal information based on user queries.",
    "projectLink": "https://github.com/MitanshuPatel999/ChatBot.git",
    "tags": [Tag.ASPNET, Tag.SQL],
    "pictures": ["../../assets/project_imgs/RECS_Picture1.png","../../assets/project_imgs/RECS_Picture2.png",
    "../../assets/project_imgs/RECS_Picture3.png","../../assets/project_imgs/RECS_Picture4.png"]
  },
  {
    "id": 4,
    "name": "Naari - A Women Safety Application",
    "summary": "Android application for women safety with SOS alerts",
    "description": "This project was a part of SSIP Azadi ka Amrit Mahotsav Hackathon 2022. Along with my team, we made an Android application with required functionalities like shake detection, automating SOS alerts with live location coordinates and an interactive User Interface. This app was built using Kotlin language and by integrating some APIs.",
    "projectLink": "",
    "tags": [Tag.ANDROID, Tag.FIREBASE],
    "pictures": ["../../assets/project_imgs/Nari_Picture1.jpg","../../assets/project_imgs/Nari_Picture2.png"]
  },
  {
    "id": 5,
    "name": "Smart Scientific Calculator",
    "summary": "Voice-enabled scientific calculator with GUI",
    "description": "Smart Scientific Calculator is a voice-enabled calculator which is having a simple and realistic user interface. This project is mostly based on Tkinter library & Speech-Recognition library providing GUI and Voice interactions respectively to the calculator. This was a final project submitted in Harvard University's course CS50p.",
    "projectLink": "https://github.com/MitanshuPatel999/SmartScientificCalculator.git",
    "tags": [Tag.PYTHON, Tag.AIML],
    "pictures": ['../../assets/project_imgs/SSC_Picture1.jpg']
  }]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjecById(id: number){
    let project=this.projects.find(project=>project.id===id);
    if(project===undefined){
      throw new TypeError("No project found with ID: "+id+"!!!")
    }
    return project;
  }

}
