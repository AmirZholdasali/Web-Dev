import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading:boolean = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
