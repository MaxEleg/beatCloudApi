import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import {ApiService} from '../../services/api/api.service';
import {User, AppState, WebAuth} from '../../interfaces';
import {environment} from "../../../environments/environment";

declare var WaveSurfer:any;

@Component({
  selector: 'app-soundplayer',
  templateUrl: './soundplayer.component.html',
  styleUrls: ['./soundplayer.component.css']
})
export class SoundPlayerComponent implements OnInit {
  playerId: string = "";
  wavesurfer: any = {};
  auth: WebAuth;
  isPlaying: boolean = false;
  playerLoaded: boolean = false;

  @Input() sound;

  constructor(private apiService: ApiService,  private store: Store<AppState>) {}

  ngOnInit() {
    var playerId = 'player-' + this.sound.id;
    var soundUrl = environment.app_url + '/sound/load/' + this.sound.uid;
    this.playerId = playerId;

    setTimeout(()=>{
      this.wavesurfer = WaveSurfer.create({
        container: '#' + playerId,
        // The color can be either a simple CSS color or a Canvas gradient
        waveColor: "#f50",
        progressColor: 'hsla(200, 100%, 30%, 0.5)',
        cursorColor: '#f50',
        // This parameter makes the waveform look like SoundCloud's player
        barWidth: 3
      });
      this.wavesurfer.load(soundUrl);
      this.wavesurfer.on('ready', ()=>{
        this.playerLoaded = true;
        //this.wavesurfer.play();
      });
    }, 1000)
  }

  playPause(){
    this.wavesurfer.playPause();
    this.isPlaying = !this.isPlaying;
  }

}
