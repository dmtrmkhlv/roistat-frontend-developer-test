<template>
    <div class="table">
        <div class="table__row">
            <div class="table__row__item">Имя</div>
            <div class="table__row__item">Телефон</div>
        </div>
        <div class="table__box">
            <div class="table__row">
                <div class="table__row__item">Марина</div>
                <div class="table__row__item">+7 941 125-14-15</div>
            </div>
            <div class="table__row">
                <div class="table__row__item">Петр</div>
                <div class="table__row__item">+7 941 125-14-15</div>
            </div>
             <div class="table__row">
                <div class="table__row__item"><span>+ </span>Алексей</div>
                <div class="table__row__item">+7 941 125-14-15</div>
            </div>
             <div class="table__row">
                <div class="table__row__item"><span>+ </span>Иван</div>
                <div class="table__row__item">+7 941 125-14-15</div>
            </div>
             <div class="table__row">
                <div class="table__row__item">Борис</div>
                <div class="table__row__item">+7 941 125-14-15</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    }
</script>

<style scoped>
.table{
    margin-top: 30px;
    width: 100%;
}
.table__row{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.table__row .table__row__item:last-child{
    max-width: 50%;
}

.table__row__item{
    max-width: 50%;
    width: 50%;
    border: 1px solid #000;
    box-sizing: border-box;
    margin-left: -1px;
    margin-bottom: -1px;
    padding: 5px 15px;
    text-align: left;
}
</style>