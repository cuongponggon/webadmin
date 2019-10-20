import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Account } from '../../models/account.model';
import { AccountDetailService } from '../../services/account-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountForm: FormGroup;
  accounts: Account[];




  constructor(
    private router: Router,
    private accountService: AccountService,
    private accountDetailService: AccountDetailService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    const self = this;

    this.accountForm = this.fb.group({
      'searchValue': ''
    });
    this.getAllAccounts();
  }

  getAllAccounts() {
    const self = this;
    this.accountService.getAllAccount().subscribe((accountList) => {
      this.accounts = accountList;
    }, (error) => {
      console.log(error);
    });
  }

  // getAccountByStore(id: number) {
  //   const self = this;
  //   this.accountService.getAccountByStore(id).subscribe((accountList) => {
  //     this.accounts = accountList;
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  searchByUsernameOrFullname(searchValue: String): void {
    const self = this;
    // if (this.storeID == null) {
    //   if (searchValue === '') {
    //     this.getAccountByCompany(this.companyID);
    //   } else {
    //     this.accountService.getAccountInCompanyByValue(searchValue, this.companyID).subscribe((accountList) => {
    //       if (accountList.length === 0) {
    //         this.toastr.warning('Cannot find account by value!', 'Warning');
    //       } else {
    //         this.accounts = accountList;
    //       }
    //     }, (error) => {
    //       console.log(error);
    //     });
    //   }
    // } else {
    //   if (searchValue === '') {
    //     this.getAccountByStore(this.storeID);
    //   } else {
    //     this.accountService.getAccountInStoreByValue(searchValue, this.storeID).subscribe((accountList) => {
    //       if (accountList.length === 0) {
    //         this.toastr.warning('Cannot find account by value!', 'Warning');
    //       } else {
    //         this.accounts = accountList;
    //       }
    //     }, (error) => {
    //       console.log(error);
    //     });
    //   }
    // }
  }

  // getAccountByCompany(id: number) {
  //   const self = this;
  //   this.accountService.getAccountByCompany(id).subscribe((accountList) => {
  //     this.accounts = accountList;
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

  deleteAccountInStore(accountID: number, username: String) {
    const self = this;
    if (window.confirm('Do you want to delete ' + username + ' in this store ?')) {
      this.accountDetailService.deleteAccount(accountID).subscribe((message) => {
        this.toastr.success('Delete ' + username + ' successfully !', 'Notification');
        window.location.reload();
      }, (error) => {
        this.toastr.warning('Delete ' + username + ' unsuccessfully !', 'Warning');
      });
    } else {
      return;
    }
  }

}
