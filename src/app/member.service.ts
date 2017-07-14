import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
   }

   getMembers() {
     return this.members;
   }

   getMemberById(memberId: string) {
     return this.database.object('/members/' + memberId);
   }

   addMember(newMember: Member) {
     this.members.push(newMember);
   }

   updateMember(localUpdatedMember) {
    const projectEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    projectEntryInFirebase.update({name: localUpdatedMember.name,
    role: localUpdatedMember.role,
    joinDate: localUpdatedMember.joinDate,
    age: localUpdatedMember.age,
    hometown: localUpdatedMember.hometown,
    bio: localUpdatedMember.bio,
    fastestTime: localUpdatedMember.fastestTime,
    awards: localUpdatedMember.awards});
  }

}
