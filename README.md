
https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html

TableTree4J\dataTableTree

Sentry
https://www.cnblogs.com/jiebba/p/10049938.html

focus效果

box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(215,25,33, 0.6)
border-color: rgba(215,25,33, 0.8);

rgba(82, 168, 236, 0.8)
inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)

DT导出功能

        // 添加导出功能（DT自带）
        function create_export_excel_button() {
            new $.fn.dataTable.Buttons(mr_table, {
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: '导出',
                        title: 'MR同步详细',
                        className: 'btn btn-info btn-xs btn-export',
                        extension: '.xlsx',
                        exportOptions: {
                            columns: ':visible:not(.check-box):not(.col-opt)',
                            format: {
                                body: function (data, row, column, node) {
                                    if(row < 2) {
                                        console.log(data);
                                        // console.log(data, row, column, node);
                                    }
                                }
                            }
                        }
                    }
                ]
            });
            mr_table.buttons().container().appendTo($("#btn-export"));
        }

https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation

postCSSS

threeShake(树摇)

应用打包webpack

库打包 Rollup

ES Module

CSS var

LitElement

webcomponent
