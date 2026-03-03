import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.albumService.getAlbum(id).subscribe(data => {
        this.album = data;
        this.loading = false;
      });
    });
  }

  saveTitle() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(updated => {
        alert('Album updated!');
        this.album = updated;
      });
    }
  }
}
