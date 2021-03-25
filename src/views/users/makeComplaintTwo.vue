<template>
  <div>
    <div class="complaint-title">
      <span>信息填写:</span>
      <span>
        <b style="color: #e51523">*</b
        >号为必填选项，为了我们能及时与您取得联系，
        了解更详细信息，请您认真填写以下内容。
      </span>
    </div>
    <div class="info-fill">
      <div class="small-title">
        <span>车辆信息:</span>
        <span> 请您如实填写您要投诉的车辆信息 </span>
      </div>
      <div class="car-info">
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="160"
        >
          <FormItem label="车辆类型:" prop="gender">
            <RadioGroup v-model="formValidate.gender">
              <Radio label="male">燃油车</Radio>
              <Radio label="female">新能源车</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="质量投诉部位(多选):" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
              <Checkbox label="车身"></Checkbox>
              <Checkbox label="变速箱"></Checkbox>
              <Checkbox label="变速箱"></Checkbox>
              <Checkbox label="离合器" v-for="(i, j) in 6" :key="j"></Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="故障描述:" prop="desc">
            <Input
              v-model="formValidate.desc"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="Enter something..."
            ></Input>
          </FormItem>
        </Form>
        <div class="submit-btn">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur",
          },
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change",
          },
        ],
        gender: [
          {
            required: true,
            message: "Please select gender",
            trigger: "change",
          },
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change",
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur",
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.complaint-title {
  border-bottom: 2px solid #cccccc;
  margin: 0 30px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 704px;
  span:first-child {
    font-size: 22px;
    font-weight: bold;
    margin-right: 20px;
  }
  span:last-child {
    font-size: 15px;
    color: #a2a2a2;
    width: 330px;
  }
}
.info-fill {
  margin: 0 30px;
  padding: 0 30px;
  .small-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 704px;
    position: relative;
    padding: 30px 0;
    &::before {
      width: 5px;
      height: 22px;
      content: "";
      position: absolute;
      background: #015c95;
      left: -20px;
      top: 50%;
      transform: translate(0, -50%);
    }
    span:first-child {
      font-size: 22px;
      font-weight: bold;
      margin-right: 20px;
    }
    span:last-child {
      font-size: 15px;
      color: #313131;
      width: 330px;
    }
  }
}
.car-info {
  width: 640px;
}
.submit-btn {
  width: 217px;
  height: 48px;
  line-height: 48px;
  background-color: #cccccc;
  border-radius: 4px;
  margin: 60px auto 20px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}
/deep/.ivu-input {
  border: solid 1px #a2a2a2 !important;
  background: #ffffff !important;
}
</style>