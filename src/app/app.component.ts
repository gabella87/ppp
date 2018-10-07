import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conectapi';
  private apiUrl = 'http://190.103.177.239:5000/hosts';
  data: any = {};

  constructor(private http: Http){
  	console.log('Hola');
  	this.getContacts();
  	this.getData();
  }

  getData(){
  	return this.http.get(this.apiUrl)
  		.pipe(map((res: Response) => res.json()))
  }

  getContacts(){
  	this.getData().subscribe(data => {
  		console.log(data);
  		this.data = data
  	})
  }

}
