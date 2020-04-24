const jogo_da_velha = {

  // ATTRIBUTES
  board: ['','','','','','','','',''],
  simbols: {
              options: ['O','X'],
              turn_index: 0,
              change: function(){
                  this.turn_index = ( this.turn_index === 0 ? 1:0 );
              }
          },
  container_element: null,
  player_name: null,
  gameover: false,
  winning_sequences: [
                      [0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]
                  ],

  // FUNCTIONS
  init: function(container, name) {
      this.container_element = container;
      this.player_name = name;
  },

  make_play: function(position) {
      if (this.gameover) return false;
      if (this.board[position] === ''){
          this.board[position] = this.simbols.options[this.simbols.turn_index];
          this.draw();
          

          let winning_sequences_index = this.check_winning_sequences( this.simbols.options[this.simbols.turn_index] );
          if (winning_sequences_index >= 0){
              this.game_is_over();
              


          } else{
              this.simbols.change();
              content = "<span>"+ this.simbols.options[this.simbols.turn_index] +"</span>";
              this.player_name.innerHTML = content;
          }
          return true;
      }
      else {
          return false;
      }
  },

  check_winning_sequences: function(simbol) {

      for ( i in this.winning_sequences ) {
          if (this.board[ this.winning_sequences[i][0] ] == simbol  &&
              this.board[ this.winning_sequences[i][1] ] == simbol &&
              this.board[ this.winning_sequences[i][2] ] == simbol) {
              content = "<span>"+ simbol +" VENCEEU! </span>";
              this.player_name.innerHTML = content;
              console.log('winning sequences INDEX:' + i);

              return i;
          }
      };
      return -1;
  },

  game_is_over: function() {
      this.gameover = true;
      console.log('GAME OVER');
  },

  start: function() {
      this.board.fill('');
      this.draw();
      this.gameover = false;
      content = "<span>"+ this.simbols.options[this.simbols.turn_index] +"</span>";
      this.player_name.innerHTML = content;
  },

  is_game_over() {
    return !this.board.includes('');
},

  restart() {
    if (this.is_game_over() || this.gameover) {
        this.start();
        console.log('this game has been restarted!')
    } else if (confirm('Voçê tem certeza que quer abandonar o game atual?')) {
        this.start();
        console.log('this game has been restarted!')
    }
},

  

  

  draw: function() {
      let content = '';

      for ( i in this.board ) {
          content += '<div onclick="jogo_da_velha.make_play(' + i + ')">' + this.board[i] + '</div>';
      };

      this.container_element.innerHTML = content;
  },
};

jogo_da_velha.init(document.querySelector('.game'), document.querySelector('.jogador'));
jogo_da_velha.start();
