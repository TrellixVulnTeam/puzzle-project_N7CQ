import tensorflow as tf;

saver = tf.train.import_meta_graph('./saved_model.pb')
sess = tf.Session
saver.restor(sess, './saved_model.pb')
print([node.name for node in graph.as_graph_def().node])