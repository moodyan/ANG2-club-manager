import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  editMemberForm: boolean = false;
  editMemberButton: boolean = true;
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  // beginDeletingMember(memberToDelete){
  //   if(confirm("Are you sure you want to delete this member? You cannot undo this action.")){
  //     this.memberService.deleteMember(memberToDelete);
  //   }
  // }

  showEditMemberForm() {
    this.editMemberForm = true;
    this.editMemberButton = false;
  }

  hideEditMemberForm() {
    this.editMemberForm = false;
    this.editMemberButton = true;
  }

}
