<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { ElForm, ElTable, ElTableColumn, ElCol, ElCheckboxGroup, ElDialog, ElInput, ElSelect, ElOption, ElSwitch, ElCheckbox, ElFormItem, ElRadio, ElRadioGroup, ElButton, ElDatePicker, ElTimePicker } from 'element-plus'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

const centerDialogVisible = ref(false)
const tableData = ref()

function getList() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            tableData.value = json
        })
}

function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    getList()
}

function deletePost(id: string) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
}

function updatePost(id: string) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: 'abc',
            body: 'b1412ar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

onMounted(() => {
    getList()
})
</script>

<template>
    <div class="p-10">
        <el-button text @click="centerDialogVisible = true">
            Click to open the Dialog
        </el-button>
        <el-button @click="createPost">Create User</el-button>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
            <el-table-column prop="phone" label="phone" />
            <el-table-column prop="username" label="username" />
            <el-table-column prop="website" label="website" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="{ row }">
                    <el-button type="primary" @click="updatePost(row.id)">Update</el-button>
                    <el-button type="danger" @click="deletePost(row.id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog v-model="centerDialogVisible" title="Warning" width="50%" align-center>
            <el-form :model="form" label-width="120px">
                <el-form-item label="Activity name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery">
                    <el-switch v-model="form.delivery" />
                </el-form-item>
                <el-form-item label="Activity type">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="Online activities" name="type" />
                        <el-checkbox label="Promotion activities" name="type" />
                        <el-checkbox label="Offline activities" name="type" />
                        <el-checkbox label="Simple brand exposure" name="type" />
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="Sponsor" />
                        <el-radio label="Venue" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form">
                    <el-input v-model="form.desc" type="textarea" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
