module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能
                'fix', // 修复bug
                'docs', // 文档修改
                'style', // 代码格式修改，注意不是 css 修改
                'refactor', // 代码重构
                'perf', // 优化相关，比如提升性能、体验
                'test', // 测试用例修改
                'chore', // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
                'revert', // 回滚到上一个版本
                'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
            ],
        ],
        'type-case': [0], // type 的输入格式,默认为小写‘lower-case’
        'type-empty': [0], // type 是否可为空
        'scope-empty': [0], // scope 是否为空
        'scope-case': [0], // scope 的格式,默认为小写‘lower-case’
        'subject-full-stop': [0, 'never'], // subject 结尾符,默认为.
        'subject-case': [0, 'never'], // subject 的格式，默认其中之一：['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        'header-max-length': [0, 'always', 72], // header 最大长度，默认为72字符
    },
}; 