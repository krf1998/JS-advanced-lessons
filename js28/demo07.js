// �������ֽ⹹��ֵ����ʹ��Բ���š�
//��1��������������У����ܴ���Բ���š�
// ȫ������
var [(a)] = [1];
var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};
var { o: ({ p: p }) } = { o: { p: 2 } };
//����������䶼�ᱨ������Ϊ���Ƕ��Ǳ���������䣬ģʽ����ʹ��Բ����

//��2�����������У�ģʽ���ܴ���Բ����
//��������Ҳ���ڱ�����������˲��ܴ���Բ���š�
// ����
function f([(z)]) { return z; }

//��3����ֵ����У����ܽ�����ģʽ����Ƕ��ģʽ�е�һ�㣬����Բ����֮��
// ȫ������
({ p: a }) = { p: 42 };
([a]) = [5];
//������뽫����ģʽ����Բ����֮�У����±�����
// ����
[({ p: a }), { x: c }] = [{}, {}];
//������뽫Ƕ��ģʽ��һ�㣬����Բ����֮�У����±�����

//����ʹ��Բ���ŵ��������ֵ���ķ�ģʽ���֣�����ʹ��Բ���š�
[(b)] = [3]; // ��ȷ
({ p: (d) } = {}); // ��ȷ
[(parseInt.prop)] = [3]; // ��ȷ
// ����������䶼������ȷִ��,���ǵ�Բ���Ŷ�������ģʽ��һ���֡�
// ��һ������У�ģʽ��ȡ����ĵ�һ����Ա����Բ�����޹�
// �ڶ�������У�ģʽ��p��������d
// ������������һ����������һ��
// ������������ֵ������ģʽʱ����ʹ�����ţ��������ܲ������ŵľ������ã������������