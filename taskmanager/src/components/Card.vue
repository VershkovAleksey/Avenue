<template>
    <el-dialog :visible="isVisible">
        <el-form label-width="100px" :model="tableItem" :rules="rules" ref="cardForm">
            <el-form-item label="ФИО" prop="name">
                <el-input v-model="tableItem.name"></el-input>
            </el-form-item>
            <el-form-item label="Дата" prop="date">
                <el-date-picker v-model="tableItem.date" type="date" placeholder="Укажите дату" format="dd.MM.yyyy"
                    :picker-options="pickerOptions">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Адрес" prop="address">
                <el-input v-model="tableItem.address"></el-input>
            </el-form-item>
            <el-form-item label="№ заказа" prop="orderNumber">
                <el-input maxlength="5" v-model.number="tableItem.orderNumber"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" round @click="confirm">ОК</el-button>
        <el-button type="danger" round @click="reject">Отмена</el-button>
    </el-dialog>
</template>
<script>
export default {
    props: ["isVisible"],
    name: "Card",
    data() {
        return {
            tableItem: {
                name: '',
                address: '',
                orderNumber: '',
                date: ''
            },
            rules: {
                name: [
                    {
                        required: true, message: "Пожалуйста введите ваше ФИО", trigger: 'blur'
                    },
                    {
                        min: 10, max: 100, message: "Слишком короткое ФИО", trigger: 'change'
                    }
                ],
                date: [
                    {
                        required: true, message: "Укажите дату"
                    },
                ],
                address: [
                    {
                        required: true, message: "Пожалуйста введите адрес ", trigger: 'blur'
                    },
                    {
                        min: 10, max: 100, message: "Слишком короткий адрес", trigger: 'change'
                    }
                ],
                orderNumber: [
                    {
                        required: true, message: "Введите номер заказа"
                    },
                    {
                        type: 'number', message: "Номер должен состоять из цифр"
                    }
                ]
            },
            pickerOptions: {
                shortcuts: [{
                    text: 'Сегодня',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: 'Вчера',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: 'Неделю назад',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
        }
    },
    methods: {
        confirm() {
            this.$refs['cardForm'].validate((valid) => {
                if (valid) {
                    this.$emit("addElement", this.tableItem);
                    this.tableItem = {};
                }
            })
        },
        reject() {
            this.isVisible = false;
        }
    }
}
</script>