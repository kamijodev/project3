$(() => {
    // メイン処理
    const main = () => {
      // 追加ボタンを押した時の処理
      $('#submit-button').click(function() {
        // 文字数が1文字以上ない場合アラートして処理を打ち切る
        if ($('#name-text').val().length <= 0) {
          alert("文字が入力されていません。")
          return;
        }
        // タスクを追加する
        addTasks($('#name-text').val());
        // 入力欄を空にする
        $('#name-text').val('');
      });
    };
    const addTasks = (taskText) => {
        // ドラッグ可能なタスクの要素を作成
        const item =
          $('<li>').text('・').append(
          ).draggable({
            start() {
              $(this).addClass('dragNow');
            },
            stop() {
              $(this).removeClass('dragNow');
            }
          });
        const div = $('<div>').text(taskText).css('width', '100%').css('background', '#fff565');

        // 削除ボタン作成
        const deleteBtn = $('<button>').text('✕').css('background','silver').click(() => {
          $(item).remove();
        });
        // divをitemに追加する
        $(item).append(div);
        // 削除ボタンをitemに追加する
        $(item).append(deleteBtn);
        // 作った要素をリストに追加
        $('#name-list').append(item);
      };
    
      main();
    });
