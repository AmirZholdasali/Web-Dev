import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-photos.html',
  styles: [`
    .grid { display: flex; flex-wrap: wrap; gap: 10px; }
    .card { width: 150px; text-align: center; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading:boolean = true;
  albumId!: number;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
        this.photos = data;
        this.loading = false;
      });
    });
  }
}
