import React from 'react';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider';

class UserEditor extends React.Component {

  // 加载时检查是否存在 props.editTarget
  // 存在，使用props.setFormValues方法将editTarget的值设置到表单
  componentWillMount () {
    const {editTarget, setFormValues} = this.props;
    if (editTarget) {
      setFormValues(editTarget);
    }
  }

  handleSubmit (e) {
    e.preventDefault();

    const { form: { name, age, gender }, formValid, editTarget } = this.props;

    if (!formValid) {
      alert('请填写正确的信息后重试');
      return;
    }

    let editType = '添加';
    let apiUrl = 'http://localhost:3000/user';
    let method = 'post';
    if (editTarget) {
      editType = '编辑';
      apiUrl += '/' + editTarget.id;
      method = 'put';
    }


    fetch(apiUrl, {
      method,
      // 使用fetch提交的json数据需要使用JSON.stringify转为字符串
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        gender: gender.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // 当添加成功，返回的json对象中应包含一个有效的id字段
        if (res.id) {
          alert('添加用户成功');
          this.context.router.history.push('/user/list'); // router 4.0 要加history！
          return;
        } else {
          alert(editType + '失败');
        }
      })
      .catch((err) => console.error(err));
  }

  render () {
    const { form: { name, age, gender }, onFormChange } = this.props;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <FormItem label="用户名" valid={name.valid} error={name.error}>
          <input
            type="text"
            value={name.value}
            onChange={(e) => onFormChange('name', e.target.value)}
          />
        </FormItem>
        <br/>
        <FormItem label="年龄" valid={age.valid} error={age.error}>
          <input
            type="number"
            value={age.value || ''}
            onChange={(e) => onFormChange('age', e.target.value, 'number')}
          />
        </FormItem>
        <br/>
        <FormItem label="性别" valid={gender.valid} error={gender.error}>
          <select
            value={gender.value}
            onChange={(e) => onFormChange('gender',e.target.value)}
          >
            <option value="">请选择</option>
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </FormItem>
        <br/>
        <br/>
        <input type="submit" value="提交"/>
      </form>
    );
  }
}

// 必须定义一个contextTypes且包含router属性，才能在此组件中通过this.context.router来使用React Router 提供的方法
UserEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
}

UserEditor = formProvider({
  name: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return value.length > 0;
        },
        error: '请输入用户名'
      },
      {
        pattern: /^.{1,4}$/,
        error: '用户名最多4个字符'
      }
    ]
  },
  age: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return value >= 1 && value <= 100;
        },
        error: '请输入1-100的年龄'
      }
    ]
  },
  gender: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return !!value
        },
        error: '请选择性别'
      }
    ]
  }
})(UserEditor);

export default UserEditor;