import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/Material.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  apiUrl = environment.apiUrl;
  private materialEndpoint = `${this.apiUrl}/materials`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Material[]> {
    return this.http.get<Material[]>(this.materialEndpoint);
  }

  getOne(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.materialEndpoint}/${id}`);
  }

  create(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.materialEndpoint}`, material);
  }
}
