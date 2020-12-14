var app = new Vue({
  el: "#app",
    data:{
      contacts: [
    	{
    		name: 'Michele',
    		avatar: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/avatar-1581-1129070.png',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Fabio',
    		avatar: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/avatar-1641438-1392920.png',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/male-avatar-36-1128949.png',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Luisa',
    		avatar: 'https://cdn.iconscout.com/icon/free/png-64/avatar-1924065-1628715.png',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			}
    		],
    	},
    ],
    objectIndex: 0,
    inputMessage: "",
    inputFieldRubrica: "",
    objectInputMessage: {},
    botMessage: {}
    },

    methods: {
      booleanClass: function (index) {
        this.objectIndex = index;
      },
// -------------------------------------
      addMessage: function() {
        var backup = this.contacts[this.objectIndex].messages;
        this.objectInputMessage.text = this.inputMessage;
        this.inputMessage = "";
				this.objectInputMessage.status = "sent";
				this.objectInputMessage.date = dayjs().format('DD/MM/YYYY H:mm:ss');
				backup.push(this.objectInputMessage);
        this.objectInputMessage = {};

        // risposta bot
        setTimeout(
  					() => {
  						this.botMessage.text = "Ok!",
  						this.botMessage.date = dayjs().format('DD/MM/YYYY H:mm:ss');
  						this.botMessage.status = "received",
  						backup.push(this.botMessage);
  						this.botMessage = {};
  					}, 2000);
      },
// -------------------------------------------


      rubrica: function() {
        this.contacts.forEach(
          (element) => {
            element.visible = false;
            if (element.name.includes(this.inputFieldRubrica)) {
              element.visible = true;
            }
        }
      );
    },



		}
});
