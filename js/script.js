var app = new Vue(
 {

  el: "#app",
    data:{
      activeBot: false,
      objectIndex: 0,
      inputMessage: "",
      inputFieldRubrica: "",
      contacts: [
    	{
    		name: 'Michele',
    		avatar: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/avatar-1581-1129070.png',
    		visible: true,
        typing: 'sta scrivendo....',
    		messages: [
          {
            date: '10/01/2020 15:30:55',
            text: '',
            status: '',
            activeClass: false,

          },
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent',
            activeClass: false,

    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent',
            activeClass: false,


    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received',
            		activeClass: false,



    			}
    		],
    	},
    	{
    		name: 'Fabio',
    		avatar: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/avatar-1641438-1392920.png',
    		visible: true,
        typing:'Sta scrivendo...',
    		messages: [
          {
            date: '10/01/2020 15:30:55',
            text: '',
            status: '',
            activeClass: false,

          },
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent',
            		activeClass: false,



    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received',
           			 activeClass: false,



    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent',
            		activeClass: false,



    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/male-avatar-36-1128949.png',
    		visible: true,
        typing:'Sta scrivendo...',
    		messages: [
          {
            date: '10/01/2020 15:30:55',
            text: '',
            status: '',
            activeClass: false,

          },
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received',
            		activeClass: false,



    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent',
            		activeClass: false,



    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received',
            		activeClass: false,



    			}
    		],
    	},
    	{
    		name: 'Luisa',
    		avatar: 'https://cdn.iconscout.com/icon/free/png-64/avatar-1924065-1628715.png',
    		visible: true,
        typing:'Sta scrivendo...',
    		messages: [
          {
            date: '10/01/2020 15:30:55',
            text: '',
            status: '',
            activeClass: false,

          },
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent',
            		activeClass: false,



    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received',
            		activeClass: false,



    			}
    		],
    	},
    ],
    },

    methods: {
      indexSelector: function (index) {
        this.objectIndex = index;
      },
// -------------------------------------
      addMessage: function() {
		let messageBackup = this.contacts[this.objectIndex].messages;
        let backup = {
          date: dayjs().format('DD/MM/YYYY H:mm:ss'),
          text: this.inputMessage,
          status: 'sent',
          activeClass: false
        };

        messageBackup.push(backup);
        this.activeBot = true;
        // risposta bot

            switch (this.inputMessage) {
              case 'ciao':
              this.inputMessage = '';
              setTimeout(
                  () => {
                    var botMessage = {
                      date: dayjs().format('DD/MM/YYYY H:mm:ss'),
                      text: "Ciao!!",
                      status: 'received',
                      activeClass: false
                    };
                    messageBackup.push(botMessage);
                    this.activeBot = false;
                  }, 2000);
                break;
                case 'come stai?':
                this.inputMessage = '';
                setTimeout(
                    () => {
                      var botMessage = {
                        date: dayjs().format('DD/MM/YYYY H:mm:ss'),
                        text: "Alla grande, tu come stai?",
                        status: 'received',
                        activeClass: false
                      };
                      messageBackup.push(botMessage);
                      this.activeBot = false;
                    }, 4000);
                  break;
                  case 'che film vorresti vedere?':
                  this.inputMessage = '';
                  setTimeout(
                      () => {
                        var botMessage = {
                          date: dayjs().format('DD/MM/YYYY H:mm:ss'),
                          text: "Mi piacerebbe vedere un bel film thriller..",
                          status: 'received',
                          activeClass: false
                        };
                        messageBackup.push(botMessage);
                        this.activeBot = false;
                      }, 4000);
                    break;
              default:
              this.inputMessage = '';
              setTimeout(
                  () => {
                    var botMessage = {
                      date: dayjs().format('DD/MM/YYYY H:mm:ss'),
                      text: "Mi dispiace ma non posso risponderti al momento, ti posso contattare più tardi?",
                      status: 'received',
                      activeClass: false
                    };
                    messageBackup.push(botMessage);
                    this.activeBot = false;
                  }, 4000);
                break;

            }
      },
// -------------------------------------------


      rubrica: function() {
        this.contacts.forEach(
          (element) => {
            element.visible = false;
            if (element.name.toLowerCase().includes(this.inputFieldRubrica.toLowerCase())) {
              element.visible = true;
            }
        }
      );
    },

	contactSelector: function (index) {
		this.objectIndex = index;
	}, // fine funzione

    toggleActiveClass: function (index) {

				let messageBackup = this.contacts[this.objectIndex].messages;
				let target = this.contacts[this.objectIndex].messages[index];

				messageBackup.forEach(
					(element) => {
						if (target != element) {
							element.activeClass = false;
						}
					}
				);

				if (target.activeClass == false) {
					target.activeClass = true;
				} else {
					target.activeClass = false;
				}
			}, // fine funzione
// -----------------------------------------------
    deleteMessage: function (index) {
      let messageBackup = this.contacts[this.objectIndex].messages;

      messageBackup.splice(index, 1);
    }


      // da sistemare mi seleziona tutti i messaggi

// ---------------------------------------------

		}
});
