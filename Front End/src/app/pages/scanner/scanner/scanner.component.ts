import { Component, OnInit } from '@angular/core';

const constraints = {
  video: true
};

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})

export class ScannerComponent implements OnInit {
  recording = false;

  constructor() { }

  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia(constraints)
  }

  toggleRecording(): void {
    this.recording = !this.recording;
  }

}
