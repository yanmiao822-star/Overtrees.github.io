(function (w) {
  var C = {
    API_BASE: 'https://mynote.yanmiao822.workers.dev',
    URL_REGEX: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)$/i,
    URL_INLINE_REGEX: /https?:\/\/[\-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[\-a-zA-Z0-9()@:%_+.~#?&\/=]*/i,
    NEW_CARD_ID: '__new_memo_card__',
    GOOGLE_CLIENT_ID: '369692322774-se6hvcg8lvlacbgl8hf3u4d3tme7aeht.apps.googleusercontent.com',
    GOOGLE_API_KEY: 'YOUR_API_KEY',
    BACKUP_FILE_NAME: 'memories_backup.json'
  };

  C.isUrl = function (str) {
    return C.URL_REGEX.test(String(str || '').trim());
  };

  C.extractUrlFromText = function (str) {
    var match = String(str || '').match(C.URL_INLINE_REGEX);
    return match ? match[0] : null;
  };

  C.getTypeIcon = function (type) {
    if (type === 'music') return '🎵';
    if (type === 'video') return '🎬';
    return '🔗';
  };

  w.CikeConstants = C;
})(window);
