// full-stack-application-test/client/server/app.js
new Vue({
    el: '#app',
    data: {
        frage: '',
        antwort: '',
        fragenAntworten: []
    },
    async created() {
        await this.holen();
    },
    methods: {
        async senden() {
            await fetch('http://localhost:3000/frage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ frage: this.frage, antwort: this.antwort }),
            });
            this.frage = '';
            this.antwort = '';
            await this.holen();
        },

        async holen() {
            const response = await fetch('http://localhost:3000/frage');
            const data = await response.json();
            this.fragenAntworten = data.map(item => ({...item, editing: false}));
        },

        async saveEdit(id) {
            const item = this.fragenAntworten.find(i => i.id === id);
            const response = await fetch(`http://localhost:3000/frage/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ frage: item.frage, antwort: item.antwort }),
            });
            if (response.ok) {
                item.editing = false;
                this.holen();
                
            } else {
                console.error('Fehler beim Speichern der Änderungen');
            }
        },

        async deleteRow(id) {
            const response = await fetch(`http://localhost:3000/frage/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                this.holen();
            } else {
                console.error('Fehler beim Löschen der Frage/Antwort');
            }
        }
    }
});
