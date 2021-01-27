// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.language = exports.conf = void 0;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
  comments: {
    lineComment: '--',
    blockComment: ['/*', '*/']
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }]
};
exports.conf = conf;
var language = {
  defaultToken: '',
  tokenPostfix: '.sql',
  ignoreCase: true,
  brackets: [{
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }, {
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }],
  keywords: ['AES128', 'AES256', 'ALL', 'ALLOWOVERWRITE', 'ANALYSE', 'ANALYZE', 'AND', 'ANY', 'ARRAY', 'AS', 'ASC', 'AUTHORIZATION', 'BACKUP', 'BETWEEN', 'BINARY', 'BLANKSASNULL', 'BOTH', 'BYTEDICT', 'BZIP2', 'CASE', 'CAST', 'CHECK', 'COLLATE', 'COLUMN', 'CONSTRAINT', 'CREATE', 'CREDENTIALS', 'CROSS', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURRENT_USER_ID', 'DEFAULT', 'DEFERRABLE', 'DEFLATE', 'DEFRAG', 'DELTA', 'DELTA32K', 'DESC', 'DISABLE', 'DISTINCT', 'DO', 'ELSE', 'EMPTYASNULL', 'ENABLE', 'ENCODE', 'ENCRYPT', 'ENCRYPTION', 'END', 'EXCEPT', 'EXPLICIT', 'FALSE', 'FOR', 'FOREIGN', 'FREEZE', 'FROM', 'FULL', 'GLOBALDICT256', 'GLOBALDICT64K', 'GRANT', 'GROUP', 'GZIP', 'HAVING', 'IDENTITY', 'IGNORE', 'ILIKE', 'IN', 'INITIALLY', 'INNER', 'INTERSECT', 'INTO', 'IS', 'ISNULL', 'JOIN', 'LEADING', 'LEFT', 'LIKE', 'LIMIT', 'LOCALTIME', 'LOCALTIMESTAMP', 'LUN', 'LUNS', 'LZO', 'LZOP', 'MINUS', 'MOSTLY13', 'MOSTLY32', 'MOSTLY8', 'NATURAL', 'NEW', 'NOT', 'NOTNULL', 'NULL', 'NULLS', 'OFF', 'OFFLINE', 'OFFSET', 'OID', 'OLD', 'ON', 'ONLY', 'OPEN', 'OR', 'ORDER', 'OUTER', 'OVERLAPS', 'PARALLEL', 'PARTITION', 'PERCENT', 'PERMISSIONS', 'PLACING', 'PRIMARY', 'RAW', 'READRATIO', 'RECOVER', 'REFERENCES', 'RESPECT', 'REJECTLOG', 'RESORT', 'RESTORE', 'RIGHT', 'SELECT', 'SESSION_USER', 'SIMILAR', 'SNAPSHOT', 'SOME', 'SYSDATE', 'SYSTEM', 'TABLE', 'TAG', 'TDES', 'TEXT255', 'TEXT32K', 'THEN', 'TIMESTAMP', 'TO', 'TOP', 'TRAILING', 'TRUE', 'TRUNCATECOLUMNS', 'UNION', 'UNIQUE', 'USER', 'USING', 'VERBOSE', 'WALLET', 'WHEN', 'WHERE', 'WITH', 'WITHOUT'],
  operators: ['AND', 'BETWEEN', 'IN', 'LIKE', 'NOT', 'OR', 'IS', 'NULL', 'INTERSECT', 'UNION', 'INNER', 'JOIN', 'LEFT', 'OUTER', 'RIGHT'],
  builtinFunctions: ['current_schema', 'current_schemas', 'has_database_privilege', 'has_schema_privilege', 'has_table_privilege', 'age', 'current_time', 'current_timestamp', 'localtime', 'isfinite', 'now', 'ascii', 'get_bit', 'get_byte', 'set_bit', 'set_byte', 'to_ascii', 'approximate percentile_disc', 'avg', 'count', 'listagg', 'max', 'median', 'min', 'percentile_cont', 'stddev_samp', 'stddev_pop', 'sum', 'var_samp', 'var_pop', 'bit_and', 'bit_or', 'bool_and', 'bool_or', 'cume_dist', 'first_value', 'lag', 'last_value', 'lead', 'nth_value', 'ratio_to_report', 'dense_rank', 'ntile', 'percent_rank', 'rank', 'row_number', 'case', 'coalesce', 'decode', 'greatest', 'least', 'nvl', 'nvl2', 'nullif', 'add_months', 'at time zone', 'convert_timezone', 'current_date', 'date_cmp', 'date_cmp_timestamp', 'date_cmp_timestamptz', 'date_part_year', 'dateadd', 'datediff', 'date_part', 'date_trunc', 'extract', 'getdate', 'interval_cmp', 'last_day', 'months_between', 'next_day', 'sysdate', 'timeofday', 'timestamp_cmp', 'timestamp_cmp_date', 'timestamp_cmp_timestamptz', 'timestamptz_cmp', 'timestamptz_cmp_date', 'timestamptz_cmp_timestamp', 'timezone', 'to_timestamp', 'trunc', 'abs', 'acos', 'asin', 'atan', 'atan2', 'cbrt', 'ceil', 'ceiling', 'checksum', 'cos', 'cot', 'degrees', 'dexp', 'dlog1', 'dlog10', 'exp', 'floor', 'ln', 'log', 'mod', 'pi', 'power', 'radians', 'random', 'round', 'sin', 'sign', 'sqrt', 'tan', 'to_hex', 'bpcharcmp', 'btrim', 'bttext_pattern_cmp', 'char_length', 'character_length', 'charindex', 'chr', 'concat', 'crc32', 'func_sha1', 'initcap', 'left and rights', 'len', 'length', 'lower', 'lpad and rpads', 'ltrim', 'md5', 'octet_length', 'position', 'quote_ident', 'quote_literal', 'regexp_count', 'regexp_instr', 'regexp_replace', 'regexp_substr', 'repeat', 'replace', 'replicate', 'reverse', 'rtrim', 'split_part', 'strpos', 'strtol', 'substring', 'textlen', 'translate', 'trim', 'upper', 'cast', 'convert', 'to_char', 'to_date', 'to_number', 'json_array_length', 'json_extract_array_element_text', 'json_extract_path_text', 'current_setting', 'pg_cancel_backend', 'pg_terminate_backend', 'set_config', 'current_database', 'current_user', 'current_user_id', 'pg_backend_pid', 'pg_last_copy_count', 'pg_last_copy_id', 'pg_last_query_id', 'pg_last_unload_count', 'session_user', 'slice_num', 'user', 'version', 'abbrev', 'acosd', 'any', 'area', 'array_agg', 'array_append', 'array_cat', 'array_dims', 'array_fill', 'array_length', 'array_lower', 'array_ndims', 'array_position', 'array_positions', 'array_prepend', 'array_remove', 'array_replace', 'array_to_json', 'array_to_string', 'array_to_tsvector', 'array_upper', 'asind', 'atan2d', 'atand', 'bit', 'bit_length', 'bound_box', 'box', 'brin_summarize_new_values', 'broadcast', 'cardinality', 'center', 'circle', 'clock_timestamp', 'col_description', 'concat_ws', 'convert_from', 'convert_to', 'corr', 'cosd', 'cotd', 'covar_pop', 'covar_samp', 'current_catalog', 'current_query', 'current_role', 'currval', 'cursor_to_xml', 'diameter', 'div', 'encode', 'enum_first', 'enum_last', 'enum_range', 'every', 'family', 'format', 'format_type', 'generate_series', 'generate_subscripts', 'get_current_ts_config', 'gin_clean_pending_list', 'grouping', 'has_any_column_privilege', 'has_column_privilege', 'has_foreign_data_wrapper_privilege', 'has_function_privilege', 'has_language_privilege', 'has_sequence_privilege', 'has_server_privilege', 'has_tablespace_privilege', 'has_type_privilege', 'height', 'host', 'hostmask', 'inet_client_addr', 'inet_client_port', 'inet_merge', 'inet_same_family', 'inet_server_addr', 'inet_server_port', 'isclosed', 'isempty', 'isopen', 'json_agg', 'json_object', 'json_object_agg', 'json_populate_record', 'json_populate_recordset', 'json_to_record', 'json_to_recordset', 'jsonb_agg', 'jsonb_object_agg', 'justify_days', 'justify_hours', 'justify_interval', 'lastval', 'left', 'line', 'localtimestamp', 'lower_inc', 'lower_inf', 'lpad', 'lseg', 'make_date', 'make_interval', 'make_time', 'make_timestamp', 'make_timestamptz', 'masklen', 'mode', 'netmask', 'network', 'nextval', 'npoints', 'num_nonnulls', 'num_nulls', 'numnode', 'obj_description', 'overlay', 'parse_ident', 'path', 'pclose', 'percentile_disc', 'pg_advisory_lock', 'pg_advisory_lock_shared', 'pg_advisory_unlock', 'pg_advisory_unlock_all', 'pg_advisory_unlock_shared', 'pg_advisory_xact_lock', 'pg_advisory_xact_lock_shared', 'pg_backup_start_time', 'pg_blocking_pids', 'pg_client_encoding', 'pg_collation_is_visible', 'pg_column_size', 'pg_conf_load_time', 'pg_control_checkpoint', 'pg_control_init', 'pg_control_recovery', 'pg_control_system', 'pg_conversion_is_visible', 'pg_create_logical_replication_slot', 'pg_create_physical_replication_slot', 'pg_create_restore_point', 'pg_current_xlog_flush_location', 'pg_current_xlog_insert_location', 'pg_current_xlog_location', 'pg_database_size', 'pg_describe_object', 'pg_drop_replication_slot', 'pg_export_snapshot', 'pg_filenode_relation', 'pg_function_is_visible', 'pg_get_constraintdef', 'pg_get_expr', 'pg_get_function_arguments', 'pg_get_function_identity_arguments', 'pg_get_function_result', 'pg_get_functiondef', 'pg_get_indexdef', 'pg_get_keywords', 'pg_get_object_address', 'pg_get_owned_sequence', 'pg_get_ruledef', 'pg_get_serial_sequence', 'pg_get_triggerdef', 'pg_get_userbyid', 'pg_get_viewdef', 'pg_has_role', 'pg_identify_object', 'pg_identify_object_as_address', 'pg_index_column_has_property', 'pg_index_has_property', 'pg_indexam_has_property', 'pg_indexes_size', 'pg_is_in_backup', 'pg_is_in_recovery', 'pg_is_other_temp_schema', 'pg_is_xlog_replay_paused', 'pg_last_committed_xact', 'pg_last_xact_replay_timestamp', 'pg_last_xlog_receive_location', 'pg_last_xlog_replay_location', 'pg_listening_channels', 'pg_logical_emit_message', 'pg_logical_slot_get_binary_changes', 'pg_logical_slot_get_changes', 'pg_logical_slot_peek_binary_changes', 'pg_logical_slot_peek_changes', 'pg_ls_dir', 'pg_my_temp_schema', 'pg_notification_queue_usage', 'pg_opclass_is_visible', 'pg_operator_is_visible', 'pg_opfamily_is_visible', 'pg_options_to_table', 'pg_postmaster_start_time', 'pg_read_binary_file', 'pg_read_file', 'pg_relation_filenode', 'pg_relation_filepath', 'pg_relation_size', 'pg_reload_conf', 'pg_replication_origin_create', 'pg_replication_origin_drop', 'pg_replication_origin_oid', 'pg_replication_origin_progress', 'pg_replication_origin_session_is_setup', 'pg_replication_origin_session_progress', 'pg_replication_origin_session_reset', 'pg_replication_origin_session_setup', 'pg_replication_origin_xact_reset', 'pg_replication_origin_xact_setup', 'pg_rotate_logfile', 'pg_size_bytes', 'pg_size_pretty', 'pg_sleep', 'pg_sleep_for', 'pg_sleep_until', 'pg_start_backup', 'pg_stat_file', 'pg_stop_backup', 'pg_switch_xlog', 'pg_table_is_visible', 'pg_table_size', 'pg_tablespace_databases', 'pg_tablespace_location', 'pg_tablespace_size', 'pg_total_relation_size', 'pg_trigger_depth', 'pg_try_advisory_lock', 'pg_try_advisory_lock_shared', 'pg_try_advisory_xact_lock', 'pg_try_advisory_xact_lock_shared', 'pg_ts_config_is_visible', 'pg_ts_dict_is_visible', 'pg_ts_parser_is_visible', 'pg_ts_template_is_visible', 'pg_type_is_visible', 'pg_typeof', 'pg_xact_commit_timestamp', 'pg_xlog_location_diff', 'pg_xlog_replay_pause', 'pg_xlog_replay_resume', 'pg_xlogfile_name', 'pg_xlogfile_name_offset', 'phraseto_tsquery', 'plainto_tsquery', 'point', 'polygon', 'popen', 'pqserverversion', 'query_to_xml', 'querytree', 'quote_nullable', 'radius', 'range_merge', 'regexp_matches', 'regexp_split_to_array', 'regexp_split_to_table', 'regr_avgx', 'regr_avgy', 'regr_count', 'regr_intercept', 'regr_r2', 'regr_slope', 'regr_sxx', 'regr_sxy', 'regr_syy', 'right', 'row_security_active', 'row_to_json', 'rpad', 'scale', 'set_masklen', 'setseed', 'setval', 'setweight', 'shobj_description', 'sind', 'sprintf', 'statement_timestamp', 'stddev', 'string_agg', 'string_to_array', 'strip', 'substr', 'table_to_xml', 'table_to_xml_and_xmlschema', 'tand', 'text', 'to_json', 'to_regclass', 'to_regnamespace', 'to_regoper', 'to_regoperator', 'to_regproc', 'to_regprocedure', 'to_regrole', 'to_regtype', 'to_tsquery', 'to_tsvector', 'transaction_timestamp', 'ts_debug', 'ts_delete', 'ts_filter', 'ts_headline', 'ts_lexize', 'ts_parse', 'ts_rank', 'ts_rank_cd', 'ts_rewrite', 'ts_stat', 'ts_token_type', 'tsquery_phrase', 'tsvector_to_array', 'tsvector_update_trigger', 'tsvector_update_trigger_column', 'txid_current', 'txid_current_snapshot', 'txid_snapshot_xip', 'txid_snapshot_xmax', 'txid_snapshot_xmin', 'txid_visible_in_snapshot', 'unnest', 'upper_inc', 'upper_inf', 'variance', 'width', 'width_bucket', 'xml_is_well_formed', 'xml_is_well_formed_content', 'xml_is_well_formed_document', 'xmlagg', 'xmlcomment', 'xmlconcat', 'xmlelement', 'xmlexists', 'xmlforest', 'xmlparse', 'xmlpi', 'xmlroot', 'xmlserialize', 'xpath', 'xpath_exists'],
  builtinVariables: [// NOT SUPPORTED
  ],
  pseudoColumns: [// NOT SUPPORTED
  ],
  tokenizer: {
    root: [{
      include: '@comments'
    }, {
      include: '@whitespace'
    }, {
      include: '@pseudoColumns'
    }, {
      include: '@numbers'
    }, {
      include: '@strings'
    }, {
      include: '@complexIdentifiers'
    }, {
      include: '@scopes'
    }, [/[;,.]/, 'delimiter'], [/[()]/, '@brackets'], [/[\w@#$]+/, {
      cases: {
        '@keywords': 'keyword',
        '@operators': 'operator',
        '@builtinVariables': 'predefined',
        '@builtinFunctions': 'predefined',
        '@default': 'identifier'
      }
    }], [/[<>=!%&+\-*/|~^]/, 'operator']],
    whitespace: [[/\s+/, 'white']],
    comments: [[/--+.*/, 'comment'], [/\/\*/, {
      token: 'comment.quote',
      next: '@comment'
    }]],
    comment: [[/[^*/]+/, 'comment'], // Not supporting nested comments, as nested comments seem to not be standard?
    // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
    // [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
    [/\*\//, {
      token: 'comment.quote',
      next: '@pop'
    }], [/./, 'comment']],
    pseudoColumns: [[/[$][A-Za-z_][\w@#$]*/, {
      cases: {
        '@pseudoColumns': 'predefined',
        '@default': 'identifier'
      }
    }]],
    numbers: [[/0[xX][0-9a-fA-F]*/, 'number'], [/[$][+-]*\d*(\.\d*)?/, 'number'], [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']],
    strings: [[/'/, {
      token: 'string',
      next: '@string'
    }]],
    string: [[/[^']+/, 'string'], [/''/, 'string'], [/'/, {
      token: 'string',
      next: '@pop'
    }]],
    complexIdentifiers: [[/"/, {
      token: 'identifier.quote',
      next: '@quotedIdentifier'
    }]],
    quotedIdentifier: [[/[^"]+/, 'identifier'], [/""/, 'identifier'], [/"/, {
      token: 'identifier.quote',
      next: '@pop'
    }]],
    scopes: [// NOT SUPPORTED
    ]
  }
};
exports.language = language;
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58332" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js"], null)
//# sourceMappingURL=/redshift.66807afb.js.map