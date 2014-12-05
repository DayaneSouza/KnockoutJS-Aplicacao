var BetterListModel = function () {
    this.itemToAdd = ko.observable(""); 
    this.allItems = ko.observableArray(["Exemplo", "Knockout", "JS", "KO"]); // Iniciando a lista de Itens
    this.selectedItems = ko.observableArray(["Knockout"]);  //Seleção Inicial
 
    this.addItem = function () {
        if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0)) //Prevenir adicionar em branco e duplicar item
            this.allItems.push(this.itemToAdd()); //Adiciona o item na lista e notifica os Observadores
        this.itemToAdd(""); // Desmarque a caixa de texto
    };
 
    this.removeSelected = function () {
        this.allItems.removeAll(this.selectedItems()); // remove o item selecionado
        this.selectedItems([]); // Limpar seleção
    };
 
    this.sortItems = function() {
        this.allItems.sort(); //Classifica (ordena) os itens da lista
    };

};

ko.applyBindings(new BetterListModel());

