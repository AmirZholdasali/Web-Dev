import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> { return this.http.get<Album[]>(this.url); }
  getAlbum(id: number): Observable<Album> { return this.http.get<Album>(`${this.url}/${id}`); }
  getAlbumPhotos(id: number): Observable<Photo[]> { return this.http.get<Photo[]>(`${this.url}/${id}/photos`); }
  updateAlbum(album: Album): Observable<Album> { return this.http.put<Album>(`${this.url}/${album.id}`, album); }
  deleteAlbum(id: number): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}
