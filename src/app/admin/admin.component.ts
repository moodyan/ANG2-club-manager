import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  newMemberForm: boolean = false;
  newMemberButton: boolean = true;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  showNewMemberForm() {
    this.newMemberForm = true;
    this.newMemberButton = false;
  }

  hideNewMemberForm() {
    this.newMemberButton = true;
    this.newMemberForm = false;
  }
}
