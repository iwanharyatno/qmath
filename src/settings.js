export const setting = {
    init: function() {
        this.isOpen = false;
        this._triggerer = document.getElementById('setting-icon');
        this._settings = document.getElementById('settings')
        this._operation = document.getElementById('settings-operation');
        this._num1Range = {
            min: document.getElementById('num1-min'),
            max: document.getElementById('num1-max')
        };
        this._num2Range = {
            min: document.getElementById('num2-min'),
            max: document.getElementById('num2-max')
        };
        this._buttonSave = document.getElementById('save-settings');


        this._buttonSave.onclick = () => {
            this.update();
            this._settings.style.display = "none";
        };
        this._triggerer.onclick = () => {
            if (this.isOpen) {
                this.isOpen = false;
                this._settings.style.display = "none";
            } else {
                this.isOpen = true;
                this._settings.style.display = "initial";
            }
        }
        this.update();
    },
    update: function() {
        this.OPERATION = this._operation.value;
        this.NUM1_MIN = Number(this._num1Range.min.value);
        this.NUM1_MAX = Number(this._num1Range.max.value);
        this.NUM2_MIN = Number(this._num2Range.min.value);
        this.NUM2_MAX = Number(this._num2Range.max.value);

        document.getElementById('operator').textContent = this.OPERATION;
    }
}
