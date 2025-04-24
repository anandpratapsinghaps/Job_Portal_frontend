import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role = '';  // Store selected role (applicant or recruiter)

  // Applicant model
  applicant = {
    name: '',
    email: '',
    password: '',
    resume: null as File | null,
    skills: '',
    qualification: '',
    qualificationStartDate: '',
    qualificationEndDate: ''
  };

  // Recruiter model
  recruiter = {
    name: '',
    email: '',
    password: '',
    companyName: '',
    companyBio: ''
  };

  constructor(private job: JobService) {}

  // Handle file upload for applicant
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.applicant.resume = file;
    }
  }

  // Register as a recruiter
  registerAsRecruiter() {
    this.job.registerAsRecruiter(this.recruiter).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  // Register as an applicant
  registerAsJobSeeker() {
    this.job.registerAsJobSeeker(this.applicant).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.role === 'applicant') {
      this.registerAsJobSeeker();
    } else if (this.role === 'recruiter') {
      this.registerAsRecruiter();
    }
  }
}
