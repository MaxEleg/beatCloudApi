import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import {User, AppState, WebAuth} from '../../interfaces';

import * as AuthActions from '../../stores/auth/auth.actions';

declare var WaveSurfer:any;

@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundPlayerComponent implements OnInit {
  errors: any[] = [];
  wavesurfer: any = {};
  auth: WebAuth;

  @Input() playerId;
  @Input() soundUrl;

  constructor(private apiService: ApiService,  private store: Store<AppState>) {}

  ngOnInit() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform'
    });
    this.wavesurfer.load(this.soundUrl);
    this.wavesurfer.on('ready', ()=>{
      //this.wavesurfer.playPause();
    });
  }

}
