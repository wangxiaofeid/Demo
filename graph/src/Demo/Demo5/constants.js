export const schema = {
  nodes: [
    {
      name: 'movie',
      labelName: '电影',
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDAuMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik00ODggNDE2Yy01Ny42IDAtMTA0LTQ2LjQtMTA0LTEwNHM0Ni40LTEwNCAxMDQtMTA0IDEwNCA0Ni40IDEwNCAxMDQtNDYuNCAxMDQtMTA0IDEwNHogbTAtMTQ0Yy0yMi40IDAtNDAgMTcuNi00MCA0MHMxNy42IDQwIDQwIDQwIDQwLTE3LjYgNDAtNDAtMTcuNi00MC00MC00MHpNMzEyIDY0MGMtNTcuNiAwLTEwNC00Ni40LTEwNC0xMDRzNDYuNC0xMDQgMTA0LTEwNCAxMDQgNDYuNCAxMDQgMTA0LTQ2LjQgMTA0LTEwNCAxMDR6IG0wLTE0NGMtMjIuNCAwLTQwIDE3LjYtNDAgNDBzMTcuNiA0MCA0MCA0MCA0MC0xNy42IDQwLTQwLTE3LjYtNDAtNDAtNDB6IG0yMjQgMzIwYy01Ny42IDAtMTA0LTQ2LjQtMTA0LTEwNHM0Ni40LTEwNCAxMDQtMTA0IDEwNCA0Ni40IDEwNCAxMDQtNDYuNCAxMDQtMTA0IDEwNHogbTAtMTQ0Yy0yMi40IDAtNDAgMTcuNi00MCA0MHMxNy42IDQwIDQwIDQwIDQwLTE3LjYgNDAtNDAtMTcuNi00MC00MC00MHogbTE3Ni04MGMtNTcuNiAwLTEwNC00Ni40LTEwNC0xMDRzNDYuNC0xMDQgMTA0LTEwNCAxMDQgNDYuNCAxMDQgMTA0LTQ2LjQgMTA0LTEwNCAxMDR6IG0wLTE0NGMtMjIuNCAwLTQwIDE3LjYtNDAgNDBzMTcuNiA0MCA0MCA0MCA0MC0xNy42IDQwLTQwLTE3LjYtNDAtNDAtNDB6IG0yMTYgNTEySDUxMkMyNjUuNiA5NjAgNjQgNzU4LjQgNjQgNTEyUzI2NS42IDY0IDUxMiA2NHM0NDggMjAxLjYgNDQ4IDQ0OGMwIDEyMS42LTQ4IDIzNS4yLTEzNC40IDMyMC0xMi44IDEyLjgtMzMuNiAxMi44LTQ0LjggMC0xMi44LTEyLjgtMTIuOC0zMy42IDAtNDQuOEM4NTQuNCA3MTMuNiA4OTYgNjE2IDg5NiA1MTJjMC0yMTEuMi0xNzIuOC0zODQtMzg0LTM4NFMxMjggMzAwLjggMTI4IDUxMnMxNzIuOCAzODQgMzg0IDM4NGg0MTZjMTcuNiAwIDMyIDE0LjQgMzIgMzJzLTE0LjQgMzItMzIgMzJ6IiAvPjwvc3ZnPg==',
      fill: '#00d2c2',
      properties: [
        {
          propertyKey: 'uid',
          propertyKeyName: 'uid',
          dataType: 'String'
        },
        {
          propertyKey: 'name',
          propertyKeyName: '名称',
          dataType: 'String'
        },
        {
          propertyKey: 'publish',
          propertyKeyName: '发行时间',
          dataType: 'String'
        },
        {
          propertyKey: 'type',
          propertyKeyName: '类型',
          dataType: 'String'
        },
        {
          propertyKey: 'area',
          propertyKeyName: '区域',
          dataType: 'String'
        }
      ]
    },
    {
      name: 'movie2',
      labelName: '纪录片',
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDAuMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik00ODggNDE2Yy01Ny42IDAtMTA0LTQ2LjQtMTA0LTEwNHM0Ni40LTEwNCAxMDQtMTA0IDEwNCA0Ni40IDEwNCAxMDQtNDYuNCAxMDQtMTA0IDEwNHogbTAtMTQ0Yy0yMi40IDAtNDAgMTcuNi00MCA0MHMxNy42IDQwIDQwIDQwIDQwLTE3LjYgNDAtNDAtMTcuNi00MC00MC00MHpNMzEyIDY0MGMtNTcuNiAwLTEwNC00Ni40LTEwNC0xMDRzNDYuNC0xMDQgMTA0LTEwNCAxMDQgNDYuNCAxMDQgMTA0LTQ2LjQgMTA0LTEwNCAxMDR6IG0wLTE0NGMtMjIuNCAwLTQwIDE3LjYtNDAgNDBzMTcuNiA0MCA0MCA0MCA0MC0xNy42IDQwLTQwLTE3LjYtNDAtNDAtNDB6IG0yMjQgMzIwYy01Ny42IDAtMTA0LTQ2LjQtMTA0LTEwNHM0Ni40LTEwNCAxMDQtMTA0IDEwNCA0Ni40IDEwNCAxMDQtNDYuNCAxMDQtMTA0IDEwNHogbTAtMTQ0Yy0yMi40IDAtNDAgMTcuNi00MCA0MHMxNy42IDQwIDQwIDQwIDQwLTE3LjYgNDAtNDAtMTcuNi00MC00MC00MHogbTE3Ni04MGMtNTcuNiAwLTEwNC00Ni40LTEwNC0xMDRzNDYuNC0xMDQgMTA0LTEwNCAxMDQgNDYuNCAxMDQgMTA0LTQ2LjQgMTA0LTEwNCAxMDR6IG0wLTE0NGMtMjIuNCAwLTQwIDE3LjYtNDAgNDBzMTcuNiA0MCA0MCA0MCA0MC0xNy42IDQwLTQwLTE3LjYtNDAtNDAtNDB6IG0yMTYgNTEySDUxMkMyNjUuNiA5NjAgNjQgNzU4LjQgNjQgNTEyUzI2NS42IDY0IDUxMiA2NHM0NDggMjAxLjYgNDQ4IDQ0OGMwIDEyMS42LTQ4IDIzNS4yLTEzNC40IDMyMC0xMi44IDEyLjgtMzMuNiAxMi44LTQ0LjggMC0xMi44LTEyLjgtMTIuOC0zMy42IDAtNDQuOEM4NTQuNCA3MTMuNiA4OTYgNjE2IDg5NiA1MTJjMC0yMTEuMi0xNzIuOC0zODQtMzg0LTM4NFMxMjggMzAwLjggMTI4IDUxMnMxNzIuOCAzODQgMzg0IDM4NGg0MTZjMTcuNiAwIDMyIDE0LjQgMzIgMzJzLTE0LjQgMzItMzIgMzJ6IiAvPjwvc3ZnPg==',
      fill: '#00d2c2',
      properties: [
        {
          propertyKey: 'uid',
          propertyKeyName: 'uid',
          dataType: 'String'
        },
        {
          propertyKey: 'name',
          propertyKeyName: '名称',
          dataType: 'String'
        },
        {
          propertyKey: 'publish',
          propertyKeyName: '发行时间',
          dataType: 'String'
        },
        {
          propertyKey: 'type',
          propertyKeyName: '类型',
          dataType: 'String'
        },
        {
          propertyKey: 'area',
          propertyKeyName: '区域',
          dataType: 'String'
        }
      ]
    },
    {
      name: 'person',
      labelName: '人',
      icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDAuMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02MjAuNzQ0MTkxIDUzOC44NzkxODRjODIuNzM2MzUzLTQwLjUyMzk0OSAxNDAuMzA4NTgzLTEyNC43ODUwMjggMTQwLjMwODU4My0yMjIuOTM2NDY1IDAtMTM3LjM2NzYwMS0xMTEuNzE0MzM4LTI0OS4wODA5MTUtMjQ5LjAyNjY4LTI0OS4wODA5MTUtMTM3LjM2NzYwMSAwLTI0OS4wODA5MTUgMTExLjcxMzMxNC0yNDkuMDgwOTE1IDI0OS4wODA5MTUgMCA5OC4xNTE0MzcgNTcuNTcyMjMgMTgyLjQxMjUxNiAxNDAuMzYzODQxIDIyMi45MzY0NjVDMjM1LjMzMDIzOCA1ODYuNDI5MTUzIDExMS43OTY3MTQgNzQwLjczNjU2NSAxMTEuNzk2NzE0IDkyMy42OTQ1MDNjMCAxOC40NjQ1MzcgMTUuMDMyMzY4IDMzLjQ0MzY5MyAzMy40OTY5MDUgMzMuNDQzNjkzIDE4LjQ2NDUzNyAwIDMzLjQ5NzkyOC0xNC45NzkxNTYgMzMuNDk3OTI4LTMzLjQ0MzY5MyAwLTE4My43NzQ1MzcgMTQ5LjQ2MDAxLTMzMy4zNDMwMTcgMzMzLjIzNDU0Ny0zMzMuMzQzMDE3IDE4My43NzU1NiAwIDMzMy4yMzQ1NDcgMTQ5LjU2ODQ4MSAzMzMuMjM0NTQ3IDMzMy4zNDMwMTcgMCAxOC40NjQ1MzcgMTQuOTc4MTMzIDMzLjQ0MzY5MyAzMy40NDM2OTMgMzMuNDQzNjkzIDE4LjUxOTc5NiAwIDMzLjQ5NjkwNS0xNC45NzkxNTYgMzMuNDk2OTA1LTMzLjQ0MzY5M0M5MTIuMjAxMjQgNzQwLjczNjU2NSA3ODguNjY4NzM5IDU4Ni40MjkxNTMgNjIwLjc0NDE5MSA1MzguODc5MTg0ek0zMjkuODg2ODAxIDMxNS45NDI3MTljMC0xMDAuNDM4NTI3IDgxLjcwMTc5LTE4Mi4xOTQ1NTIgMTgyLjE0MDMxNy0xODIuMTk0NTUyIDEwMC4zODQyOTEgMCAxODIuMDg2MDgyIDgxLjc1NjAyNSAxODIuMDg2MDgyIDE4Mi4xOTQ1NTIgMCAxMDAuMzg0MjkxLTgxLjcwMjgxMyAxODIuMDg2MDgyLTE4Mi4wODYwODIgMTgyLjA4NjA4MkM0MTEuNTg3NTY4IDQ5OC4wMjg4IDMyOS44ODY4MDEgNDE2LjMyNzAxIDMyOS44ODY4MDEgMzE1Ljk0MjcxOXoiIC8+PC9zdmc+',
      fill: '#287ef0',
      properties: [
        {
          propertyKey: 'uid',
          propertyKeyName: 'uid',
          dataType: 'String'
        },
        {
          propertyKey: 'name',
          propertyKeyName: '姓名',
          dataType: 'String'
        },
        {
          propertyKey: 'gender',
          propertyKeyName: '性别',
          dataType: 'Boolean'
        },
        {
          propertyKey: 'constellation',
          propertyKeyName: '星座',
          dataType: 'String'
        },
        {
          propertyKey: 'education',
          propertyKeyName: '学历',
          dataType: 'String'
        },
        {
          propertyKey: 'age',
          propertyKeyName: '年龄',
          dataType: 'Integer'
        }
      ]
    }
  ],
  edges: [
    {
      name: 'movie_actor',
      labelName: '演员',
      properties: [
        {
          propertyKey: 'uid',
          propertyKeyName: 'uid',
          dataType: 'String'
        }
      ]
    },
    {
      name: 'movie_director',
      labelName: '导演',
      properties: [
        {
          propertyKey: 'hh',
          propertyKeyName: 'hh',
          dataType: 'String'
        }
      ]
    },
    {
      name: 'movie_publisher',
      labelName: '出品人',
      properties: []
    },
    {
      name: 'movie_maker',
      labelName: '制片人',
      properties: []
    },
    {
      name: 'movie_writer',
      labelName: '编剧',
      properties: []
    }
  ]
}
