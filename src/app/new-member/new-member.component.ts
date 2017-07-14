import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, joinDate: string, age: string, hometown: string, bio: string, fastestTime: string, awards: string[]) {
    awards = null;
    var newMember: Member = new Member(name, role, joinDate, Number(age), hometown, bio, Number(fastestTime), awards);
    this.memberService.addMember(newMember);
  }

}
