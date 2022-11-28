import { Component, OnInit } from '@angular/core';
import { ApiserveService } from 'src/app/services/apiserve.service';

@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.css']
})
export class ApicompComponent implements OnInit {

  constructor(private recceiveserve:ApiserveService) { }
 
  ngOnInit(): void {
 

}
}