import { Component, OnInit ,OnChanges} from '@angular/core';
import {GalleryService} from './../../services/gallery.service';
//import {StudentService} from './../../services/services';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  title = 'Recent Images';
  VisibleImages:any[]=[];
  //
  constructor(private galleryService:GalleryService) { 
    this.VisibleImages=galleryService.getImages();
  }

  ngOnInit() {
  }


}

