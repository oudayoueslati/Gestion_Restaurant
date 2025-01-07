import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Menu {
  id: number;
  titre: string;
  description: string;
  image: string;
  approved: boolean;
  mark: number;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menus';

  constructor(private http: HttpClient) {}

  addMenu(menu: any): Observable<any> {
    return this.http.post(this.apiUrl, menu);
  }

  getApprovedMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  getMenuById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
